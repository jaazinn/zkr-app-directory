import React from "react";
import "./style.css";
import Leftarow from "../../actets/left.png";
import LeftBBB from "../../actets/leftblack.png";
function Resources() {
  // const arr = [{ color: "#E5E5E5" }];

  const arry1 = [
    { text: "An Incomplete Guide to Rollups ", link: "https://vitalik.ca/general/2021/01/05/rollup.html" },
    { text: "ZK-Rollups on EthHub ", link: "https://docs.ethhub.io/ethereum-roadmap/layer-2-scaling/zk-rollups/" },
    { text: "What are zkRollups? ", link: "https://www.numio.one/what-are-zkrollups/" },
    { text: "The best comparison on zkRollups today ", link: "https://newsletter.banklesshq.com/p/the-best-comparison-on-zkrollups" }
  ];
  const arry2 = [
    { text: "StarkNet and Cairo Documentation", link: "https://www.cairo-lang.org/docs/" },
    { text: "Hermez network docs", link: "https://docs.hermez.io/#/" },
    { text: "Introduction to zkSync for Developers ", link: "https://zksync.io/dev/" },
    { text: "Aztec Developer Docs  ", link: "https://developers.aztec.network/" },
    { text: "Loopring Developer Docs  ", link: "https://docs.loopring.io/en/" },
    { text: "zkTube Docs", link: "https://github.com/zkTube-Labs/zkTube-docs/tree/main/docs" },
    { text: "ZKSwap Docs ", link: "https://en.wiki.zks.org/" }
  ];
  const arry3 = [
    { text: "Awesome StarkNet  ", link: "https://github.com/gakonst/awesome-starknet" },
    // { text: "zkTube Docs", link: "" },
    // { text: "ZKSwap Docs ", link: "" },
  ];

  return (
    <>
      <div className="container-fluied">
        <div className="main wrap_resorce">
          <h2 className="my-5">Guides</h2>
          <div className="resorce_card_wrap">
            {arry1.map((item) => {
              return (
                <div className="resorce_card mb-4">          
                  <div className="inside">
                    <div className="fist_w">
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <p className="resorce_text">{item.text} </p>
                      </a>
                    </div>
                    <div className="second_w">
                      <img src={Leftarow} alt=""></img>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <h2 className="my-5">zkRollup Docs</h2>
          <div className="resorce_card_wrap_tow">
            {arry2.map(
              (item) => {
                return (
                  <div
                    className="resorce_card2 mb-4"
                    style={{
                      backgroundColor: "#A7E2F2",
                    }}
                  >
                    <div className="inside">
                      <div className="fist_w">
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          <p className="resorce_text resorce_text2">
                            {item.text} 
                          </p>
                        </a>
                      </div>
                      <div className="second_w">
                        <img src={LeftBBB} alt=""></img>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
          <h2 className="my-5">Community Resources</h2>
          <div className="resorce_card_wrap margn_botm_last">
            {arry3.map((item) => {
              return (
                <div
                  className="resorce_card mb-4"
                  style={{
                    backgroundColor: "#347283",
                  }}
                >
                  <div className="inside">
                    <div className="fist_w">
                      <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <p className="resorce_text">     {item.text}  </p>
                      </a>
                    </div>
                    <div className="second_w">
                      <img src={Leftarow} alt=""></img>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Resources;
