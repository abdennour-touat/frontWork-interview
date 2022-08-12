export interface BestSellerProps {
  imageSource?: string;
  price?: string;
  modelName?: string;
  brand?: string;
  onClickElement: () => any;
  isLoading?: boolean;
}

export default function BestSeller({
  brand,
  imageSource,
  modelName,
  price,
  onClickElement,
  isLoading,
}: BestSellerProps) {

  return (
    <>
      {!isLoading ? (
        <div
          onClick={() => onClickElement()}
          className="group grid grid-cols-6 py-[15px] px-[13px] sm:space-x-6 space-x-3 h-[120px] max-w-[311px] hover:bg-[#FEF2EE]  bg-white transition-all duration-[400ms] ease-in-out rounded-3xl cursor-pointer"
        >
          <img
            className=" h-[94px] w-[94px] object-fill col-span-2 sm:col-span-2"
            src={imageSource}
            alt={modelName}
          />
          <div className=" col-span-4 space-y-[9px] ">
            <div className="   ">
              <h3 className=" font-semibold text-sm leading-5 tracking-[0.25px] text-[#FE805C] transition-[margin] group-hover:mb-[11px] text-ellipsis overflow-hidden">
                {modelName}
              </h3>
              <p className=" font-normal text-[#AFAFBD] text-xs leading-4 text-ellipsis overflow-hidden">
                {brand}
              </p>
            </div>
            <p className=" font-semibold text-sm leading-6 tracking-[0.25px] ">
              {price}
            </p>
          </div>
        </div>
      ) : (
        <div className="animate-pulse flex space-x-4 w-[311px] bg-white px-[15px] py-[13px] rounded-3xl ">
          <div className="rounded-full bg-gray-300 h-12 w-12"></div>
          <div className="flex-1 space-y-6 py-1 mt-6 ">
            <div className="h-2 w-1/2 bg-gray-300 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-gray-300 rounded col-span-2"></div>
                <div className="h-2 bg-gray-300 rounded col-span-1"></div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-gray-300 rounded col-span-2"></div>
                <div className="h-2 bg-gray-300 rounded col-span-1"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
