
interface BestSellerProps {
    imageSource?: string;
    price?: string;
    modelName?: string;
    brand?: string;
}

export default function BestSeller({brand,imageSource, modelName, price }:BestSellerProps) {
  return (
    <div className="grid grid-cols-3 p-[13px] space-x-6 w-[311px] h-[120px] bg-[#FEF2EE] rounded-3xl">
        <img className=" h-[94px] w-[94px] object-fill "
        style={{
            WebkitTransform: " scaleX(-1)",
            transform: " scaleX(-1)"

        }} 
        src={imageSource} 
        alt={modelName} />
        <div 
    className=" col-span-2 space-y-[9px]">
        <div className="space-y-[11px]">
            <h3 className=" font-semibold text-sm leading-5 tracking-[0.25px] text-[#FE805C]">{modelName}</h3>
            <p className=" font-normal text-[#AFAFBD] text-xs leading-4">{brand}</p>
        </div>
            <p className=" font-semibold text-sm leading-6 tracking-[0.25px] ">{price}</p>
        </div>
    </div>
  )
}
