import { products } from "@/lib/products";
import { notFound } from "next/navigation";
import Image from "next/image";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug); // ✅ Fix URL encoding
  const product = products.find((p) => p.slug === decodedSlug);

  if (!product) {
    console.log("❌ Product not found for slug:", decodedSlug);
    return notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">{product.title}</h1>
      <p className="text-gray-600 mb-8">{product.description}</p>

      <div className="space-y-4">
        {product.variants.map((variant, idx) => (
          <details key={idx} className="border rounded-lg p-4 group">
            <summary className="cursor-pointer font-semibold text-lg text-gray-800 list-none flex justify-between items-center">
              {variant.name}
              <span className="text-gray-500 group-open:rotate-90 transition-transform">▶</span>
            </summary>

            <div className="mt-4 space-y-3">
              <Image
                src={variant.image}
                alt={variant.name}
                width={400}
                height={250}
                className="rounded-md border"
              />
              <p className="text-gray-600">{variant.description}</p>
              <div className="text-sm text-gray-700">
                <h4 className="font-medium mt-2">Specifications:</h4>
                <ul className="list-disc list-inside">
                  {Object.entries(variant.specs).map(([key, value]) => (
                    <li key={key}>
                      <strong>{key}:</strong> {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: encodeURIComponent(product.slug), // ✅ Match encoded route
  }));
}
