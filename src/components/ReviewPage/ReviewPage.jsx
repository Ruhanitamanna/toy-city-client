import React from "react";

const ReviewPage = () => {
  return (
    <div className="text-center m-20">
      <h2 className="text-4xl font-bold">Client's Reviews</h2>
      <div className="mx-auto flex-none md:flex justify-around">
        <div>
          <div className="mask mask-squircle w-12 h-12">
            <img
              src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80"
              alt=""
            />
          </div>
          <h5 className="text-2xl">Kim Jenny</h5>
          <p>
            I recently had the pleasure of experiencing the wonder and
            excitement of [Toy Name], and I must say, it exceeded all my
            expectations. This toy is truly a game-changer in the world of
            playtime!
          </p>
        </div>
        <div>
          <div className="mask mask-squircle w-12 h-12">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
          </div>
          <h5 className="text-2xl">Scarlet Johnson </h5>
          <p>
            From the moment I opened the box, I was impressed by the quality and
            attention to detail. The craftsmanship is outstanding, and it's
            evident that this toy was made with love and care. The colors are
            vibrant, the materials are durable, and every component is
            thoughtfully designed.
          </p>
        </div>
        <div>
          <div className="mask mask-squircle w-12 h-12">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"
              alt=""
            />
          </div>
          <h5 className="text-2xl">Jennifer Anniston</h5>
          <p>
            I was particularly impressed by [specific feature or functionality].
            It's innovative and provides endless possibilities for play. Whether
            it's building, pretending, or exploring, this toy offers a world of
            adventures.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
