import { Font } from "next/dist/compiled/@vercel/og/satori";

export default async function getFonts(): Promise<Font[]> {
  const [Cabin_Sketch_Bold, Cabin_Sketch_Regular] = await Promise.all([
    fetch(
      `https://github.com/google/fonts/raw/main/ofl/cabinsketch/CabinSketch-Bold.ttf`,
    ).then((res) => res.arrayBuffer()),
    fetch(
      `https://github.com/google/fonts/raw/main/ofl/cabinsketch/CabinSketch-Regular.ttf`,
    ).then((res) => res.arrayBuffer()),
  ]);
  return [
    {
      name: "Cabin_Sketch_bold",
      data: Cabin_Sketch_Bold,
      style: "normal",
      weight: 400,
    },
    {
      name: "Cabin_Sketch_Regular",
      data: Cabin_Sketch_Regular,
      style: "normal",
      weight: 400,
    },
  ];
}
