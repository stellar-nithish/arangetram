import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay, ease: 'easeOut' },
  }),
};

const LifePhilosophy = () => {
  return (
    <main className="min-h-screen pt-28 pb-20 px-4 bg-accent">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
        >
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-dark mb-8 text-center">
            Life Philosophy
          </h1>
        </motion.div>
        
        <motion.div
          className="space-y-6 text-gray-800 text-lg leading-relaxed"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.2}
        >
          <p>
            I didn’t go hunting for a life philosophy—it ambushed me during arangetram practice. Our gurus gave us a simple task: pick a quote that would keep us motivated when training got tough. Easy, I thought… until it was 11 p.m., my calves were drafting a resignation letter, tāla was ticking in my skull like a metronome with opinions, and my araimandi looked personally offended. Somewhere between my 47th adavu and a pep talk to my ankle, desperation sent me down a late-night rabbit hole of “perseverance quotes”—and, surprise, a dusty Latin line leapt off the screen: “Aut inveniam viam aut faciam.” I hadn’t just found a quote; I had accidentally discovered my motto—I found a compass.
          </p>
          
          <div className="my-10 text-center py-8 border-y border-primary/20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-2">
              “Aut inveniam viam aut faciam”
            </h2>
            <p className="text-xl text-gray-700 italic">
              — I shall either find a way or make one.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              (Pronounced: out in-WAY-nee-ahm WEE-ahm out FAH-kyahm)
            </p>
          </div>

          <p>
            This was the great Carthaginian general Hannibal Barca’s bold response in 218 BC when his generals claimed it was impossible to cross the Alps with elephants to attack the Roman Republic. Not only did he cross the Alps, but he also stunned the world by turning the impossible into reality, forcing Rome to rethink its military strategies and shaping the future of the Empire—proving that perseverance and determination can truly move mountains.
          </p>
          
          <p>
            This timeless motto captures the very essence of the arangetram. This milestone is rarely a straight road. Preparing for this milestone is not a path neatly laid out before us—it is a path we carve with guidance and grit. At times, we find the way illuminated by the wisdom of our gurus whose encouragement lights each step forward. But there are also moments that seem impossible —aching muscles, long nights, and the constant struggle to balance school, life, and dance. That is when we make the way, discovering courage within ourselves—choosing to rise each time we falter, to try again, and to keep shaping our journey with a true spirit of perseverance.
          </p>
          
          <p>
            Countless rehearsals, the repitition of adavus until they align with tāla or rhythm, and relentless attention to detail are all part of making a way where none seems possible. True success is not measured by flawless steps alone, but by the determination to move forward even when fatigue sets in or doubt whispers otherwise. When we, as dancers, carve our way, we remind ourselves that perseverance turns struggle into strength, and every step forward—no matter how difficult—brings us closer to the heart of the art.
          </p>
          
          <p className="font-semibold text-xl text-center mt-10 text-dark">
            Arangetram isn’t just a performance; it’s living proof: when obstacles stand before us, we will either find a way—or make one.
          </p>
        </motion.div>
      </div>
    </main>
  );
};

export default LifePhilosophy;
