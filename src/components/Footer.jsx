import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
        <footer className="bg-dark text-accent py-12 text-center border-t-4 border-primary">
          <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
            <SocialLinks className="mb-6 opacity-80 hover:opacity-100 transition-opacity" />
            <p className="font-serif">&copy; {new Date().getFullYear()} Sanjana Diddige. All Rights Reserved.</p>
            <p className="mt-2 text-sm text-gray-400">Arangetram - A Celebration of Dance</p>
          </div>
        </footer>
      );
};

export default Footer;