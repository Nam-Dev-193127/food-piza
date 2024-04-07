import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeader";
import Link from "next/link";

export default function Home() {
  return (
   <>
  <Hero/>
  <HomeMenu/>
  <section
  className="
  text-center
  my-16
  "
  >
    <SectionHeaders
    subHeader={'Câu chuyện của chúng ta'}
    mainHeader={'Về chúng tôi'}

    />
    <div
    className="
    text-gray-500
    max-w-md
    mx-auto
    mt-4
    flex
    flex-col
    gap-4
    "
    >
<p
    >
  Pizza Food là chuỗi nhà hàng pizza được yêu thích và lớn nhất thế giới, trực thuộc tập đoàn Food-Piza!. Food-Fiza tự hào hiện diện tại 100 quốc gia trên khắp thế giới từ tháng 12 năm 2024.
Sự kiện này đánh dấu một cột mốc ý nghĩa để minh chứng cho sự cam kết của nhãn hàng về chất lượng pizza hảo hạng và phong cách phục vụ chuyên nghiệp.
Pizza-Food có mặt tại Việt Nam từ năm 2024 với 100% vốn nước ngoài; và hiện đã phát triển hơn 110 nhà hàng với trên 3.000 nhân viên.
</p>
<p>
Pizza-Food- nơi bạn được thỏa sức thể hiện chính mình với cơ hội hấp dẫn để phát triển cá nhân lẫn nghề nghiệp toàn diện!
Chúng tôi tận tâm mang đến một môi trường làm việc thân thiện và chuyên nghiệp cho từng nhân viên, nỗ lực hoàn thiện giá trị “Cùng nhau hướng đến một Pizza-Food TUYỆT VỜI!”
</p>
    </div>
  </section>
  <section
  className="
  text-center
  my-8
  "
  >
    <SectionHeaders
    subHeader={'Don\'t hesitable'}
    mainHeader={'Liên hệ với chúng tôi'}
    />
    <div
    className="mt-8"
    >
<a 
    className="
    text-4xl
    underline
    text-gray-500
    "
    href="tel:+113113113">+113 113 113
    </a>
    </div>
  </section>
  
   </>
  );
}
