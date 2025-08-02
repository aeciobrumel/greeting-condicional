import { useState } from "react";
import { EmojiRating } from "./EmojiRating";

const Page = () => {
    const fullTime = new Intl.DateTimeFormat('pt-BR', {
        timeStyle: 'short',
        hour12: false
    }).format();

    const hour = new Date().getHours();

    const [rate, setRate] = useState<number | null>(null);

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center text-white bg-gradient-to-r from-sky-500 to-indigo-500">
            <div className="text-9xl">{fullTime}</div>
            <div className="text-6xl font-bold">
                {hour >= 0 && hour < 12 && 'Bom dia! 😀'}
                {hour >= 12 && hour < 18 && 'Boa tarde! 😀'}
                {hour >= 18 && hour < 23 && 'Boa noite! 😀'}
            </div>

            {rate === null ? (
                <div className="flex flex-col items-center mt-12 gap-6">
                    <div className="text-2xl font-medium">Como você se sente hoje?</div>
                    <div className="flex gap-4">
                        {[0, 1, 2, 3, 4].map((value) => (
                            <button
                                key={value}
                                onClick={() => setRate(value)}
                                className="text-4xl hover:scale-110 transition"
                            >
                                {value}
                            </button>
                        ))}
                    </div>
                </div>
            ) : (<EmojiRating rate={rate} />

            )}
        </div>
    )
}
export default Page;