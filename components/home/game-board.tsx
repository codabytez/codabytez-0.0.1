"use client";
import { NextPage } from "next";
import Button from "../button";
import Image from "next/image";
import blue from "@/public/blue.svg";
import green from "@/public/green.svg";
import bolt_up_left from "@/public/bolt-up-left.svg";
import bolt_down_right from "@/public/bolt-down-right.svg";
import bolt_down_left from "@/public/bolt-down-left.svg";
import bolt_up_right from "@/public/bolt-up-right.svg";
import snake_food from "@/public/snake-food.svg";
import up_arrow from "@/public/up-arrow.svg";
import down_arrow from "@/public/down-arrow.svg";
import left_arrow from "@/public/left-arrow.svg";
import right_arrow from "@/public/right-arrow.svg";

const GameBoard: NextPage = () => {
  return (
    <div className="w-[510px] h-[475px] rounded-lg border border-[#0C1616] backdrop-blur-[32px] shadow-card game-card relative p-8 flex justify-between gap-5">
      <>
        {/* gradient bg */}
        <Image
          src={blue}
          alt="blue"
          className="absolute top-8 left-[173px] shrink-0 blur-[90px] -z-10"
        />
        <Image
          src={green}
          alt="green"
          className="absolute right-8 bottom-[112px] shrink-0 blur-[90px] -z-10"
        />

        {/* bolts */}
        <Image
          src={bolt_up_left}
          alt="bolt_up_left"
          className="absolute top-2 left-2 shrink-0"
        />
        <Image
          src={bolt_up_right}
          alt="bolt_up_right"
          className="absolute top-2 right-2 shrink-0"
        />
        <Image
          src={bolt_down_left}
          alt="bolt_down_left"
          className="absolute bottom-2 left-2 shrink-0"
        />
        <Image
          src={bolt_down_right}
          alt="bolt_down_right"
          className="absolute bottom-2 right-2 shrink-0"
        />
      </>

      <div className="w-[239px] h-[405px] rounded-lg bg-[#011627D6] shadow-snake-card relative">
        <Button
          variant="primary"
          className="absolute bottom-14 w-max right-0 left-0 mx-auto"
        >
          start-game
        </Button>
      </div>

      <div className="flex flex-col gap-5">
        <div className="w-[182px] h-[142px] rounded-lg bg-[#01142330] p-3.5 flex flex-col gap-3.5">
          <p className="font-medium text-code-snippet">
            // use keyboard <br />
            // arrows to play
          </p>
          <div className="flex flex-col items-center gap-1">
            <button className="hover:opacity-60">
              <Image src={up_arrow} alt="up_arrow" />
            </button>
            <div className="flex justify-between">
              <button className="hover:opacity-60">
                <Image src={left_arrow} alt="left_arrow" />
              </button>
              <button className="hover:opacity-60">
                <Image src={down_arrow} alt="down_arrow" />
              </button>
              <button className="hover:opacity-60">
                <Image src={right_arrow} alt="right_arrow" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2.5 flex-1">
          <p className="font-medium text-code-snippet text-secondary-400">
            // food left
          </p>
          <div className="flex gap-2 flex-wrap w-[150px]">
            {Array.from({ length: 10 }).map((_, i) => (
              <Image
                key={i}
                src={snake_food}
                alt="snake_food"
                className={`shrink-0 ${i > 6 && "opacity-30"}`}
              />
            ))}
          </div>
        </div>
        <Button variant="ghost" className="self-end">
          skip
        </Button>
      </div>
    </div>
  );
};

export default GameBoard;
