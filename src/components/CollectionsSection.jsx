import React from "react";
import { motion } from "framer-motion";
import CategoryCard from "@/components/CategoryCard";

const CATEGORIES = [
{ name: "L-Shape Sofas", image: "https://media.base44.com/images/public/6a4f37503fd1b5d00fb76938/3dd5fa506_IMG-20240619-WA0001.jpg", link: "https://photos.google.com/share/AF1QipNDpU2VJFP5OlO2IRuHwQvG_h4Wj1neH2Wn8qXU7Ccb-U0wzwPmikTRj0u5tjWDLQ?pli=1&key=ZjRLWHJGRWVYZXFiXzk1elB0NVBEUnB2dmJxeC1B" },
{ name: "3+1+1 Sofas", image: "https://media.base44.com/images/public/6a4f37503fd1b5d00fb76938/77d4901a4_IMG-20241224-WA0001.jpg", link: "https://photos.google.com/share/AF1QipMIBxLpjcS-Ty9_dcpDzpQukgDKnWZBtNGCHKL-iZ9piC1TWr28-qB0rhC7hKrw4Q?key=ZG9FSWg3RElZWFZBb3ZBbTlmT3Bad0Z5d2JlUWF3" },
{ name: "Dining", image: "https://media.base44.com/images/public/6a4f37503fd1b5d00fb76938/5e4d3cd70_IMG-20250517-WA0017.jpg", link: "https://photos.google.com/share/AF1QipNZHmr4ezdSh2Mfu4sVajqpqCp1owsoCxd28Sn31rWMupMEp_EOtfh-Y9Bdrm-fOg?key=enc5OVFyWWNTZmJYaVBtbGM4d1Nxdk1SQ1lDaHZB" },
{ name: "Cots", image: "https://media.base44.com/images/public/6a4f37503fd1b5d00fb76938/c1ea095f7_IMG-20230819-WA0011.jpg", link: "https://photos.google.com/share/AF1QipNNm1N_z5Ex3uieaaHeUEhOX77kEI-pFYRW-sDm0ulDcQXnXR3EMkNgeRsOnXF66Q?key=dDFDT09DRFpFTTk5UnlrOWJCZkJGSnkxNlRuckJB" },
{ name: "Recliner Sofas", image: "https://media.base44.com/images/public/6a4f37503fd1b5d00fb76938/9d7d38bfc_IMG-20240904-WA0045.jpg", link: "https://photos.google.com/share/AF1QipPviGoL92Gss21Bdsc44SDR-5wJnBwLLeD6-MY4F3qPEEkyQevM3Pxw9umUjQ5xhQ?key=cGdKNERVUG1FTlNNeThJSkwxRmY4aDBIWHJTWE9B" },
{ name: "Deewan Cum Bed", image: "https://media.base44.com/images/public/6a4f37503fd1b5d00fb76938/90315c32b_IMG-20241123-WA0021.jpg", link: "https://photos.google.com/share/AF1QipNuZ0PU6689DcjMC2T150lNxRSY395M8qN_mU-eIoDa-bXF2JTx7Fv2vT1NByK6OA?key=YUpSbktDeE1SeDE1RkphVW5yN3k4VURBLW93bmlB" },
{ name: "Wooden Sofas", image: "https://media.base44.com/images/public/6a4f37503fd1b5d00fb76938/e27d4739c_IMG-20230730-WA0002.jpg", link: "https://photos.google.com/share/AF1QipOz_262q0IgiNtV-ZSXqllj5JBLMnIlULfKvHQVxx7Ef13TXatUTbKK_9BOb5O4oQ?key=aFhsSERqNjNfMjhPVkY5bG9tTElEUVBEdF9SWkZn" },
{ name: "Office Furniture", image: "https://media.base44.com/images/public/6a4f37503fd1b5d00fb76938/d25c49985_IMG-20240318-WA0010.jpg", link: "https://photos.google.com/share/AF1QipPLfHKE4C5Np1yWZykXG4A1oAiS_FlnGD6Y7EYnSyTJoSZ0roEnDpNugMhk3kpAbA?key=QXhlaDA4dTNGX3dDUE0wSy16MnlsWWZhRWNGX1BR" },
{ name: "TV Units", image: "https://media.base44.com/images/public/6a4f37503fd1b5d00fb76938/b0c52ac9d_IMG-20230306-WA0015.jpg", link: "https://photos.google.com/share/AF1QipPcMvhW0dYQm22JNQw7sgJxYbhvqUoHKAtLL5XYanSYoYlBCXcfAHiAeaF4rpt5jA?key=bml1RWtGQXhzeGx6OEFEQUxMeUFwYWNDdG1RZzJR" },
{ name: "Center Tables", image: "https://media.base44.com/images/public/6a4f37503fd1b5d00fb76938/928c1b7e8_IMG-20230221-WA0052.jpg" },
{ name: "Wardrobes", image: "https://media.base44.com/images/public/6a4f37503fd1b5d00fb76938/e27f622da_IMG-20240812-WA0020.jpg", link: "https://photos.google.com/share/AF1QipOmmQFvijBtWrgeSV9OrS6w-ATbM2Lk9iTX_cM0g84sMeXUDRD6bUlVKnmQYxLBPg?key=SlJMSHUzWWFTMHFNVDdwa3psZ2xRck9MLVZXdG9R" },
{ name: "Cushion & Designer Cots", image: "https://media.base44.com/images/public/6a4f37503fd1b5d00fb76938/18bd4aa3f_IMG-20241001-WA0021.jpg", link: "https://photos.google.com/share/AF1QipNxHCbiTnrAxtrX4Zvaj19M8VsmBM9Tz73wO8oogeS0bf3J4oiPv3DayFGy2v1gzw?key=T1BVWkNNXzRrdlVHVHFidF8tR0UtOFFOYlRyeTJn" },
{ name: "Loungers & Sofa Cum Bed", image: "https://media.base44.com/images/public/6a4f37503fd1b5d00fb76938/fa4fafd43_IMG-20250702-WA0002.jpg", link: "https://photos.google.com/share/AF1QipPA7xc74zHmz9l2qj4z2M0CpQCWvEG90aDmsi4wWzUFO-vRBdfdDg27aLDwaB9eMA?key=XzRBTzltbE1hUExFU3ZZVWJSbHBlNm5DMWRDRmpB" },
{ name: "Dressing Tables", image: "https://media.base44.com/images/public/6a4f37503fd1b5d00fb76938/6a1d178ff_IMG_5757-ambi-copy.jpg", link: "https://photos.google.com/share/AF1QipMmO_QfDeMt01JCpRQG5YeKui4p6zCrxphF_pY_EbPFDSZQq4UzDfIdikdQjw9Spw?key=SXpFSzRDaWl4dEUtUFZ1dXFBWjhzeE5RYTNHQ3Bn" },
{ name: "Shoe Racks", image: "https://media.base44.com/images/public/6a4f37503fd1b5d00fb76938/b6d2a0e9e_1000014751357-1000014751357-702_01-2100.jpg", link: "https://photos.google.com/share/AF1QipPobboUAAScmZFHMdtGJW2qEPPufYrYHwsfNIqIw8S1CumjnihxrwBniv5BGQp52g?key=czdEWFhVdV91SVdNWDE4NVY4U3pOYzkwZzZlcElB" },
{ name: "Accent Chairs", image: "https://media.base44.com/images/public/6a4f37503fd1b5d00fb76938/94c6a135b_IMG_7654.jpg", link: "https://photos.google.com/share/AF1QipOIq-Qio4FUd8ZW9ofELF2lb6kvgj8FZm3vyjmtiuzF6-IMwlc8TJHlVXUTYsB8kQ?key=R04tdTl1Z0FtajREMnpiWENnaXBlVUZKYVVpaTdn" },
{ name: "Marbles", image: "https://media.base44.com/images/public/6a4f37503fd1b5d00fb76938/d668b488c_IMG-20240808-WA0018.jpg", link: "https://photos.google.com/share/AF1QipMjLwv4nURl1rtUUkyYeZpAWEUyw52JzxEKdlyVvedCCO1B6Xeo6zvUAB3G5kDlDQ?key=QXZ1bWdsYjhfOENUNFRSckljYWJEeXYyN0tJTW9R" },
{ name: "Bunk Beds", image: "https://media.base44.com/images/public/6a4f37503fd1b5d00fb76938/dc831ec86_IMG-20240201-WA0006.jpg", link: "https://photos.google.com/share/AF1QipNv6i4-jVhxcwDoqdEjx_kXPF-t8zDGDnPgnzBjwXxvzF68o2CC8V_S-XUjcF8JZw?key=eXg5M0tKZHVubkZZM2FCTXVMVmw5SjNCeFpLRzVR" }];


export default function CollectionsSection() {
  return (
    <section id="collections" className="pb-20 md:pb-32 bg-oatmeal">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        



















        

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {CATEGORIES.map((cat, i) =>
          <CategoryCard
            key={cat.name}
            name={cat.name}
            image={cat.image}
            link={cat.link}
            index={i} />

          )}
        </div>
      </div>
    </section>);

}