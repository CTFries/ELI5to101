import { ImageResponse } from "next/og";
import getFonts from "app/utils/fonts";
export async function GET(request: Request) {
  const url = new URL(request.url);
  const title = url.searchParams.get("title");
  const fonts = await getFonts();
  return new ImageResponse(
    (
      <div tw="flex flex-col w-full h-full items-center justify-center bg-[#1f231e] text-[#cdcecd]">
        <div tw="flex flex-col">
          <h1 tw="flex flex-col text-8xl">ELI5 to 101</h1>
          <h2 tw="flex flex-col text-6xl">{title}</h2>
        </div>
      </div>
    ),
    {
      fonts,
      width: 1200,
      height: 630,
    },
  );
}
