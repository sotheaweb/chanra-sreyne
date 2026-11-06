# Invite-Wedding (React + Tailwind)

Run on your computer (Node.js 18+ needed):
    npm install
    npm run dev        # open the local link it shows

Build for hosting:
    npm run build      # creates the "dist" folder -> upload "dist" to Netlify (or GitHub Pages)

Edit content: src/data.js (Telegram username, photo/music file names, program text, countdown time)
Put photos in public/images and the song in public/music

Guest name on the opening screen: add ?guest=Name to the link, e.g.
    https://your-site.netlify.app/?guest=Sokha
