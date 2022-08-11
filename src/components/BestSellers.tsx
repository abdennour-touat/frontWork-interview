import BestSeller, { BestSellerProps } from "./BestSeller"

interface BestSellersProps {
  data: BestSellerProps[]
}
function BestSellers({data}:BestSellersProps) {
  return (
    <div className=" px-[32px] py-[32px] bg-white space-y-3 rounded-3xl">
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