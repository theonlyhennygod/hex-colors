export default function Footer() {
  return (
    <>
      <footer className="footer footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - w/ ❤️ by{" "}
            <a href="https://argenisdelarosa.com/about">Argenis</a>
          </p>
        </aside>
      </footer>
    </>
  );
}
