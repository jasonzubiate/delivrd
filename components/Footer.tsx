export default function Footer() {
  return (
    <footer
      id="footer"
      className="flex w-full justify-between px-4 py-6 md:p-6"
    >
      <div className="flex gap-4">
        <a
          href="https://instagram.com/delivrdlive"
          target="_blank"
          className="font-light"
        >
          Instagram
        </a>
        <a
          href="https://jasonzubiate.com"
          target="_blank"
          className="font-light"
        >
          Creator
        </a>
      </div>
      <p className="text-ashen-taupe font-light">
        DELIVRD © {new Date().getFullYear()}
      </p>
    </footer>
  );
}
