
interface BestSellerProps {
    imageSource?: string;
    price?: string;
    modelName?: string;
    brand?: string;

}

export default function BestSeller({brand,imageSource, modelName, price }:BestSellerProps) {
  return (
    <div className="group grid grid-cols-3 p-[13px] space-x-6 w-[311px] h-[120px] hover:bg-[#FEF2EE]  transition-all duration-[400ms] ease-in-out rounded-3xl">
        <img className=" h-[94px] w-[94px] object-fill "
        style={{
            WebkitTransform: " scaleX(-1)",
            transform: " scaleX(-1)"
        }} 
        src={imageSource} 
        alt={modelName} />
        <div 
    className=" col-span-2 space-y-[9px] ">
        <div className="   ">
            <h3 className=" font-semibold text-sm leading-5 tracking-[0.25px] text-[#FE805C] transition-[margin] group-hover:mb-[11px]">{modelName}</h3>
            <p className=" font-normal text-[#AFAFBD] text-xs leading-4">{brand}</p>
        </div>
            <p className=" font-semibold text-sm leading-6 tracking-[0.25px] ">{price}</p>
        </div>
    </div>
  )
}
