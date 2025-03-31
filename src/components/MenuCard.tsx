interface PopularMenuProps {
    image: string;
    name: string;
    description: string;
    price: number;
    id:string;
}
function MenuCard({ image, name, description, price,id }: PopularMenuProps) {
    return(
        <a href="/details">
        <div className="flex bg-white my-3 p-3 rounded-xl shadow items-center justify-between">
          <img src={image} alt="" className="size-20 object-center rounded"/>
          <div className="flex flex-col gap-1">
            <p className="font-medium">{name}</p>
            <p className="text-gray-500 font-semibold">{description}</p>
          </div>
          <p className="font-semibold text-xl text-deep-pink"><span>{price}</span> FCFA</p>
        </div>
        </a>
    )
}
export default MenuCard;