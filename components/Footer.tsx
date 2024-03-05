export default function Footer() {
  return (
    <footer
      id="footer"
      className="flex w-full justify-between items-center px-4 py-6 md:p-6"
    >
      <div className="flex gap-4">
        <a
          href="https://instagram.com/delivrdlive"
          target="_blank"
          className="font-light text-sm md:text-base"
        >
          Instagram
        </a>
        <a
          href="https://jasonzubiate.com"
          target="_blank"
          className="font-light text-sm md:text-base"
        >
          Creator
        </a>
      </div>
      <p className="text-ashen-taupe font-light text-xs md:text-sm">
        DELIVRD © {new Date().getFullYear()}
      </p>
    </footer>
  );
}
