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
  { name: "Office Furniture", image: "https://media.base44.com/images/public/6a4f37503fd1b5d00fb76938/d25c49985_IMG-20240318-WA0010.jpg" },
  { name: "TV Units", image: "https://media.base44.com/images/public/6a4f37503fd1b5d00fb76938/b0c52ac9d_IMG-20230306-WA0015.jpg" },
  { name: "Center Tables", image: "https://media.base44.com/images/public/6a4f37503fd1b5d00fb76938/928c1b7e8_IMG-20230221-WA0052.jpg" },
  { name: "Wardrobes", image: "https://media.base44.com/images/public/6a4f37503fd1b5d00fb76938/e27f622da_IMG-20240812-WA0020.jpg" },
  { name: "Cushion & Designer Cots", image: "https://media.base44.com/images/public/6a4f37503fd1b5d00fb76938/18bd4aa3f_IMG-20241001-WA0021.jpg" },
  { name: "Loungers & Sofa Cum Bed", image: "https://media.base44.com/images/public/6a4f37503fd1b5d00fb76938/fa4fafd43_IMG-20250702-WA0002.jpg" },
  { name: "Dressing Tables", image: "https://media.base44.com/images/public/6a4f37503fd1b5d00fb76938/02275bee6_IMG_7654.jpg" },
  { name: "Shoe Racks", image: "https://media.base44.com/images/public/6a45ebcde6fb4264c098459a/8552f83ab_generated_252fee30.png" },
  { name: "Accent Chairs", image: "https://media.base44.com/images/public/6a45ebcde6fb4264c098459a/327910d91_generated_a961b8ef.png" },
  { name: "Marbles", image: "https://media.base44.com/images/public/6a4f37503fd1b5d00fb76938/d668b488c_IMG-20240808-WA0018.jpg" },
  { name: "Bunk Beds", image: "https://media.base44.com/images/public/6a4f37503fd1b5d00fb76938/dc831ec86_IMG-20240201-WA0006.jpg" },
];

export default function CollectionsSection() {
  return (
    <section id="collections" className="py-20 md:py-32 bg-oatmeal">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          className="mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-sandstone" />
            <span className="text-sandstone text-xs font-body tracking-[0.3em] uppercase">
              Our Collections
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl text-walnut font-medium leading-tight">
            Curated for Every Space
          </h2>
          <p className="mt-4 text-walnut/60 font-body text-base md:text-lg max-w-xl leading-relaxed font-light">
            Discover furniture that blends form and function — 
            each piece crafted with precision and care.
          </p>
        </motion.div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {CATEGORIES.map((cat, i) => (
            <CategoryCard
              key={cat.name}
              name={cat.name}
              image={cat.image}
              link={cat.link}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}