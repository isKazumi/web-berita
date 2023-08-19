export const LoadingCard = () => {
  const cardIndex = 6
  return (
    <>
      <div className="flex gap-4 w-full h-full items-center mt-5 justify-evenly flex-wrap">
        {Array.from({ length: cardIndex }, (_, index) => (
          <div
            key={index}
            className="w-96  h-96 flex flex-col gap-4 items-center justify-between rounded-lg shadow-lg p-4"
          >
            <div className="w-full h-full overflow-hidden rounded-lg bg-gray animate-pulse" />
            <div className="font-bold text-ellipsis w-full h-10 whitespace-nowrap overflow-hidden bg-gray animate-pulse" />
            <div className="font-thin text-ellipsis w-full h-10 text-start whitespace-pre overflow-hidden bg-gray animate-pulse" />
            <div className="bg-gray p-2 text-sm rounded-lg w-full h-16" />
          </div>
        ))}
      </div>
    </>
  )
}
