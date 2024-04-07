export default function MenuItem(){
    return(
        <div
        className="
        bg-gray-200
        p-4
        rounded-lg
        text-center
        group
        hover:bg-white
        hover:shadow-md
        hover:shadow-black/25
        transition-all
        "
        >
            <div
            className="
            text-center
            "
            >
            <img 
            src="/pizza.png"
            className="
            max-h-auto
            max-h-24
            block
            mx-auto
            "
            alt="pizza"
            />
            </div>
            <h4
            className="
            font-semibold
            text-xl
            my-3
            "
            >Pizza Hải Sản Pesto Xanh</h4>
            <p
            className="
            text-gray-500
            text-sm
            "
            >
             Tôm, thanh cua, mực và bông cải xanh tươi ngon trên nền sốt Pesto Xanh
            </p>
            <button className="
            mt-4
            bg-primary
            text-white
            rounded-full
            px-8
            py-2

            ">
               Thêm vào giỏ hàng 24.720 VND
               {/* 1:05:12 */}
            </button>
        </div>
    );
}