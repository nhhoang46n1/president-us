import React from "react";
import { Container } from "react-bootstrap";

function President(props) {
  return (
    <Container className="text-center mt-10">
      <h3 className="text-[44px] font-semiboldd">President Result</h3>
      <div className="mt-2">
        <p>
          <span className="text-red-500">Update: </span>
          <span className="text-red-600 font-bold pr-3">9M Ago </span>
          Exit Poll +
        </p>
      </div>
      <div className="flex justify-center mt-5">
        <div className="card bg-dark text-white h-[200px] w-[400px] border-none">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyHEPdb29fPSoo9_J4GVnt5iq6AsmOOaNaCA&usqp=CAU"
            className="card-img"
            alt="..."
          />
          <div className="card-img-overlay flex justify-end items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwOxMZcCNv_3YbLNOOqRZzX-LYYdhrgOlZ0A&usqp=CAU"
              className="rounded-full h-[140px] w-[140px] mr-6 object-cover"
            ></img>
            <div className="flex flex-column justify-end items-end">
              <p className="card-title font-bold">Joe Biden (D)</p>
              <p className="card-title">Electoral College</p>
              <p className="card-title text-[40px] leading-10 font-[500]">
                306
              </p>
              <p className="card-title">Votes</p>

              <p className="card-text font-[500]">
                <span className="pr-4">50.9%</span>
                78,882,538
              </p>
            </div>
          </div>
        </div>
        <div className="card bg-dark text-black h-[200px] w-[400px] border-none">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ_LNAHXel1uhwBZn3W1002dvYiruTJyNFfA&usqp=CAU"
            className="card-img h-[224px]"
            alt="..."
          />
          <div className="card-img-overlay flex flex-row-reverse justify-end items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo9iAoKsdwXF_kLrGYSSJSVkO7ydPN-OjpN3V4jwuFgxg0Psgq9UP5e-3vDh2EHquRuJU&usqp=CAU"
              className="rounded-full h-[140px] w-[140px] ml-6 object-cover"
            ></img>
            <div className="flex flex-column justify-start items-start">
              <p className="card-title font-bold">Donald Trump (R)</p>
              <p className="card-title">Electoral College</p>
              <p className="card-title text-[40px] text-red-600 leading-10 font-[500]">
                232
              </p>
              <p className="card-title">Votes</p>

              <p className="card-text text-red-600 font-[500]">
                <span className="pr-4">73,238,226</span>
                47.3%
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="inline-block w-[800px] text-center">
        <div className="progress mt-[30px] color-progress">
          <span className="fixed z-50 bg-white max-w-[1px] ml-[400px]">1</span>
          <div
            className="progress-bar w-[60%] color-progress-bar"
            role="progressbar"
          ></div>
        </div>
      </div>
    </Container>
  );
}

export default President;
