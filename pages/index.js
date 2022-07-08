import { ChevronLeftIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { Table } from "@mantine/core";
import React from "react";

function Home() {
  const FirstChart = (clientHeight1) => {
    console.log("console clientHeight1clientHeight1", clientHeight1);

    return clientHeight1 > 42 ? (
      <div id="1Row" className="direction">
        <div className="docArrow ">
          <a>Never Forget</a>
        </div>
        <div className="docArrow ">
          <a>salt water is the healing.</a>
        </div>
      </div>
    ) : (
      <div>
        <div
          id="1Row"
          className="directionRow"
          onClick={() => {
            var div = document.getElementById("showElement1");
            if (div.style.display !== "none") {
              div.style.display = "none";
            } else {
              div.style.display = "block";
            }
          }}
        >
          <div className="docArrow ">
            <a>documents</a>
          </div>
          <ChevronLeftIcon className="lefticon" />
        </div>
        <div id="showElement1" className="showElement1">
          <div className="docArrow ">
            <a>friend</a>
          </div>
          <div className="docArrow ">
            <a>salt water is the healing.</a>
          </div>
        </div>
      </div>
    );
  };

  const secondChart = (clientHeight1) => {
    console.log("console clientHeight1clientHeight1", clientHeight1);

    return clientHeight1 > 42 ? (
      <div id="2Row" className="direction">
        <div className="docArrow ">
          <a>friends & family</a>
        </div>
        <div className="docArrow ">
          <a>salt water is the healing.</a>
        </div>
      </div>
    ) : (
      <div>
        <div
          id="2Row"
          className="directionRow"
          onClick={() => {
            var div = document.getElementById("showElement2");
            if (div.style.display !== "none") {
              div.style.display = "none";
            } else {
              div.style.display = "block";
            }
          }}
        >
          <div className="docArrow ">
            <a>documents</a>
          </div>
          <ChevronLeftIcon className="lefticon" />
        </div>
        <div id="showElement2" className="showElement2">
          <div className="docArrow ">
            <a>friends & family</a>
          </div>
          <div className="docArrow ">
            <a>salt water is the healing.</a>
          </div>
        </div>
      </div>
    );
  };

  const thirdChart = (clientHeight1) => {
    console.log("console clientHeight1clientHeight1", clientHeight1);

    return clientHeight1 < 43 ? (
      <div id="3Row" className="direction">
        <div className="docArrow ">
          <a>Iron</a>
        </div>
        <div className="docArrow ">
          <a>Steel</a>
        </div>
      </div>
    ) : (
      <div id="3Row" className="directionRow">
        <div className="docArrow " onClick={() => {}}>
          <a>documents</a>
        </div>
        <ChevronLeftIcon className="lefticon" />
      </div>
    );
  };

  const fourthCart = (clientHeight1) => {
    console.log("console clientHeight1clientHeight1", clientHeight1);

    return (
      <div>
        <div className="col-sm-3" id="4Row">
          <div
            className="directionRow"
            onClick={() => {
              var div = document.getElementById("dropdown");
              if (div.style.display !== "none") {
                div.style.display = "none";
              } else {
                div.style.display = "block";
              }
            }}
          >
            <a className="carbon" data-toggle="dropdown">
              Documents
            </a>
            <ChevronLeftIcon className="lefticon" />
          </div>
          <div id="dropdown" className="dropdown">
            <ul className="dropdown-menu">
              <div className="listScroll">
                <a href="x-ray.html">X-Ray</a>
              </div>
              <div className="listScroll">
                <a href="#">S/Opening Calculator</a>
              </div>
              <div className="listScroll">
                <a href="certification.html">Certification</a>
              </div>
              <div className="listScroll">
                <a href="door-cores.html">Door Cores</a>
              </div>
              <div className="listScroll">
                <a href="frame-types-and-materials.html">
                  Frame Types & Materials
                </a>
              </div>
              <div className="listScroll">
                <a href="downloads.html">Downloads</a>
              </div>
              <div className="listScroll">
                <a href="pas24-secure-by-design.html">
                  PAS 24/Secure By Design
                </a>
              </div>
              <div className="listScroll">
                <a href="#">Pre-Hanging</a>
              </div>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  const [isDesktop, setDesktop] = useState(false);
  const [clientHeight1, setclientHeight1] = useState("");
  const [clientHeight2, setclientHeight2] = useState("");
  const [clientHeight3, setclientHeight3] = useState("");
  const [clientHeight4, setclientHeight4] = useState("");
  const [elements, setElements] = useState([
    {
      files: FirstChart(clientHeight1),
      Intoduction:
        "Carbon fibers or carbon fibres (alternatively CF, graphite fiber or graphite fibre) are fibers about 5 to 10 micrometers (0.00020–0.00039 in) in diameter and composed mostly of carbon atoms.",
      PapersName: "Carbon",
    }, // one
    {
      files: (
        <div id="2Row" className="direction">
          <div className="carbon ">
            <a>djflk</a>
          </div>
          <div className="carbon ">
            <a>salt water is the healing.</a>
          </div>
        </div>
      ),
      Intoduction:
        "At age 10 Torvalds began to dabble in computer programming on his grandfather’s Commodore VIC-20. In 1991, while a computer science student at the University of Helsinki, he purchased his 1 ",
      PapersName: "Salt",
    }, // two
    {
      files: (
        <div id="3Row" className="direction">
          <div className="carbon ">
            <a>Carbon</a>
          </div>
          <div className="carbon ">
            <a>Carbon</a>
          </div>
        </div>
      ),
      Intoduction:
        "personal computer (PC). He was not satisfied, however, with the computer’s operating system (OS). His PC used MS-DOS (the disk operating system from Microsoft Corp.)",
      PapersName: "Yttrium",
    }, // none
    {
      files: (
        <div id="4Row" className="direction">
          <div className="carbon ">
            <a>Carbon</a>
          </div>
          <div className="carbon ">
            <a>Carbon</a>
          </div>
        </div>
      ),
      Intoduction:
        "And those who were seen dancing were thought to be insane by those who could not hear the music",
      PapersName: "Without music, life would be a mistake.",
    },
  ]);

  useEffect(() => {
    if (window.innerWidth > 1) {
      setDesktop(true);
      setclientHeight1(document.getElementById("1Row").clientHeight);
      setclientHeight2(document.getElementById("2Row").clientHeight);
      setclientHeight3(document.getElementById("3Row").clientHeight);
      setclientHeight4(document.getElementById("4Row").clientHeight);

      console.log("console client", clientHeight1);
      console.log("console client", clientHeight2);
      console.log("console client", clientHeight3);
      console.log("console client", clientHeight4);
    } else {
      setDesktop(false);
      setclientHeight1(document.getElementById("1Row").clientHeight);
      setclientHeight2(document.getElementById("2Row").clientHeight);
      setclientHeight3(document.getElementById("3Row").clientHeight);
      setclientHeight4(document.getElementById("4Row").clientHeight);

      console.log("console client", clientHeight1);
      console.log("console client", clientHeight2);
      console.log("console client", clientHeight3);
      console.log("console client", clientHeight4);
    }

    const updateMedia = () => {
      if (window.innerWidth > 1) {
        setDesktop(true);
        setclientHeight1(document.getElementById("1Row").clientHeight);
        setclientHeight2(document.getElementById("2Row").clientHeight);
        setclientHeight3(document.getElementById("3Row").clientHeight);
        setclientHeight4(document.getElementById("4Row").clientHeight);

        console.log("console client", clientHeight1);
        console.log("console client", clientHeight2);
        console.log("console client", clientHeight3);
        console.log("console client", clientHeight4);
      } else {
        setDesktop(false);
        setclientHeight1(document.getElementById("1Row").clientHeight);
        setclientHeight2(document.getElementById("2Row").clientHeight);
        setclientHeight3(document.getElementById("3Row").clientHeight);
        setclientHeight4(document.getElementById("4Row").clientHeight);

        console.log("console client", clientHeight1);
        console.log("console client", clientHeight2);
        console.log("console client", clientHeight3);
        console.log("console client", clientHeight4);
      }
    };
    setElements([
      {
        files: FirstChart(clientHeight1),
        Intoduction:
          "Carbon fibers or carbon fibres (alternatively CF, graphite fiber or graphite fibre) are fibers about 5 to 10 micrometers (0.00020–0.00039 in) in diameter and composed mostly of carbon atoms.",
        PapersName: "Carbon",
      }, // one
      {
        files: secondChart(clientHeight2),
        Intoduction:
          "At age 10 Torvalds began to dabble in computer programming on his grandfather’s Commodore VIC-20. In 1991, while a computer science student at the University of Helsinki, he purchased his 1 ",
        PapersName: "Salt",
      }, // two
      {
        files: thirdChart(clientHeight3),
        Intoduction:
          "personal computer (PC). He was not satisfied, however, with the computer’s operating system (OS). His PC used MS-DOS (the disk operating system from Microsoft Corp.)",
        PapersName: "Yttrium",
      }, // none
      {
        files: fourthCart(clientHeight4),
        Intoduction:
          "And those who were seen dancing were thought to be insane by those who could not hear the music",
        PapersName: "Without music, life would be a mistake.",
      },
    ]);
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, [clientHeight1, clientHeight2, clientHeight3, clientHeight4]);

  // useEffect(() => {
  //   setElements([
  //     {
  //       files: FirstChart(clientHeight1),
  //       Intoduction:
  //         "Carbon fibers or carbon fibres (alternatively CF, graphite fiber or graphite fibre) are fibers about 5 to 10 micrometers (0.00020–0.00039 in) in diameter and composed mostly of carbon atoms.",
  //       PapersName: "Carbon",
  //     }, // one
  //     {
  //       files: secondChart(clientHeight2),
  //       Intoduction:
  //         "At age 10 Torvalds began to dabble in computer programming on his grandfather’s Commodore VIC-20. In 1991, while a computer science student at the University of Helsinki, he purchased his 1 ",
  //       PapersName: "Salt",
  //     }, // two
  //     {
  //       files: thirdChart(clientHeight3),
  //       Intoduction:
  //         "personal computer (PC). He was not satisfied, however, with the computer’s operating system (OS). His PC used MS-DOS (the disk operating system from Microsoft Corp.)",
  //       PapersName: "Yttrium",
  //     }, // none
  //     {
  //       files: fourthCart(clientHeight4),
  //       Intoduction:
  //         "And those who were seen dancing were thought to be insane by those who could not hear the music",
  //       PapersName: "Without music, life would be a mistake.",
  //     },
  //   ]);
  // }, [clientHeight1, clientHeight2, clientHeight3, clientHeight4]);

  const ths = (
    <tr>
      <th>Papers Name</th>
      <th>Intoduction</th>
      <th>Files</th>
    </tr>
  );

  const rows = elements.map((element) => (
    <tr key={element.PapersName}>
      <td className="">{element.PapersName}</td>
      <td name="introduction">{element.Intoduction}</td>
      <td className="files">{element.files}</td>
    </tr>
  ));
  return (
    <div className="wrap">
      <Table captionSide="bottom">
        <caption>Code Challenge for Aerial Ops</caption>
        <thead>{ths}</thead>
        <tbody>{rows}</tbody>
        <tfoot>{ths}</tfoot>
      </Table>
    </div>
  );
}

export default Home;
