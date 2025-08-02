
type Props = {
    rate: number;
}

export const EmojiRating = ({ rate }: Props) => {
    if (rate > 5) rate = 5;
    if (rate < 0) rate = 0;

    const rateInt = Math.floor(rate);

    const stars = '⭐​'.repeat(rateInt) + '☆'.repeat(5 - rateInt)
    const felling = ['😢 que bad meu irmão', '🙁 meio pra baixo', '😐 mais ou menos', '🙂 bom, tudo da pode melhorar..', '🥰 coisa boa']


    return (
        <div className="pt-20 flex items-center text-6xl">
            <div className="flex flex-col">
                <div className="flex flex-row justify-center">
                    <div className="bg-gray-700 p-2 rounded w-25">
                        {rate.toFixed(1)}
                    </div>
                    <div className="ml-3">{stars}</div>
                </div>
                <div className="flex justify-center"
                >{felling[rateInt]}</div>
            </div>
        </div>
    )
}