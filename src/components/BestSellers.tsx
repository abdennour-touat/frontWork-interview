import BestSeller, { BestSellerProps } from "./BestSeller"

interface BestSellersProps {
  data: BestSellerProps[]
}
function BestSellers({data}:BestSellersProps) {
  return (
    <div className=" sm:px-[32px] px-4 max-w-[375px] py-[32px] bg-white space-y-3 rounded-3xl">
      <h1 className="font-extrabold text-2xl">BestSellers</h1>
      {
      data.map(elt=>(
       <BestSeller {...elt}/>
      ))
      }

    </div>
  )
}

export default BestSellers