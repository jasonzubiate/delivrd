import { Metadata } from "next";

export function constructMetaData({
  title = "DELIVRD | Streamilined Demo Submissions",
  description = "Delivrd is a platform for producers to discover demo submission links for EDM's hottest labels.",
  image = "/ogimage.png",
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@jasonzubiate",
    },
    icons,
    metadataBase: new URL("https://delivrd.live"),
    themeColor: "#131313",
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
