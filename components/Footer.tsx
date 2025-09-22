export default function Footer({ legal }: { legal: string }) {
  return (
    <footer className="footer">
      <div className="container row space-between">
        <small>© {new Date().getFullYear()} DoubleJ. All rights reserved.</small>
        <small>{legal}</small>
      </div>
    </footer>
  );
}
