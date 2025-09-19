import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AccordionItem from "../components/AccordionItem";
import StepFabric from "../components/steps/StepFabric";
import StepMount from "../components/steps/StepMount";
import StepMeasurements from "../components/steps/StepMeasurements";
import StepLining from "../components/steps/StepLining";
import StepPanelCoverage from "../components/steps/StepPanelCoverage";
import StepPanelType from "../components/steps/StepPanelType";
import StepGrommetFinish from "../components/steps/StepGrommetFinish";
import StepHardware from "../components/steps/StepHardware";
import StepAccessories from "../components/steps/StepAccessories";
import IncompleteModal from "../components/IncompleteModal";
import ReviewDrawer from "../components/ReviewDrawer";

export default function FabricItem() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const image = state?.image || "/sheer.webp";
  const title = state?.title || "Curtain";
  const priceText = state?.priceText || "0 Tomans";
  const [openIndex, setOpenIndex] = useState(0);
  const [mainImage, setMainImage] = useState(image);
  const [mount, setMount] = useState("");
  const [measureMode, setMeasureMode] = useState("have");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [panelCoverage, setPanelCoverage] = useState("");
  const [panelType, setPanelType] = useState("");
  const [grommetFinish, setGrommetFinish] = useState("");
  const [hardware, setHardware] = useState("");
  const [accessories, setAccessories] = useState([]);
  const [lining, setLining] = useState([]);
  const fabricOptions = [
    { name: "Rose", image: "/sheer.webp" },
    { name: "Grey", image: "/sheer2.webp" },
    { name: "Navy", image: "/sheer3.webp" },
  ];
  const [selectedFabric, setSelectedFabric] = useState( state?.colorName || fabricOptions[0].name);
  const [showModal, setShowModal] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [validationAttempted, setValidationAttempted] = useState(false);
  const summaries = {
    fabric: selectedFabric || undefined,
    mount: mount ? mount.toUpperCase() : undefined,
    measurements:
      width && height ? `WIDTH: ${width}CM  HEIGHT: ${height}CM` : undefined,
    panelCoverage: panelCoverage || undefined,
    panelType: panelType || undefined,
    grommetFinish: grommetFinish || undefined,
    hardware: hardware || undefined,
    accessories: accessories.length ? `${accessories.join(", ")}` : undefined,
    lining: lining.length ? `${lining.join(", ")}` : undefined,
  };
  const getMissingSteps = () => {
    const missing = [];
    if (!selectedFabric) missing.push("Drapery Material & Color");
    if (!mount) missing.push("Mount Position");
    if (!width || !height) missing.push("Measurements");
    if (!lining.length) missing.push("Lining");
    if (!panelCoverage) missing.push("Panel Coverage");
    if (!panelType) missing.push("Panel Type");
    if (!grommetFinish) missing.push("Grommet Finish");
    if (!hardware) missing.push("Hardware");
    return missing;
  };

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      <div>
        <img
          src={mainImage}
          alt={title}
          className="w-full rounded-lg object-cover"
        />
      </div>
      <div className="bg-white rounded-lg border">
        <div className="px-4 py-4 border-b">
          <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
          <p className="text-sm text-gray-600 mt-1">{priceText}</p>
        </div>
        <div className="divide-y">
          <AccordionItem
            number={1}
            title="Drapery Material & Color"
            summary={summaries.fabric}
            error={validationAttempted && !summaries.fabric}
            open={openIndex === 0}
            onOpen={() => setOpenIndex(openIndex === 0 ? -1 : 0)}
          >
            <StepFabric
              options={fabricOptions}
              onSelect={(opt) => {
                setMainImage(opt.image);
                setSelectedFabric(opt.name);
              }}
              onNext={() => setOpenIndex(1)}
            />
          </AccordionItem>
          <AccordionItem
            number={2}
            title="Mount Position"
            summary={summaries.mount}
            error={validationAttempted && !summaries.mount}
            open={openIndex === 1}
            onOpen={() => setOpenIndex(openIndex === 1 ? -1 : 1)}
          >
            <StepMount
              value={mount}
              onChange={setMount}
              onNext={() => setOpenIndex(2)}
            />
          </AccordionItem>
          <AccordionItem
            number={3}
            title="Measurements"
            summary={summaries.measurements}
            error={validationAttempted && !summaries.measurements}
            open={openIndex === 2}
            onOpen={() => setOpenIndex(openIndex === 2 ? -1 : 2)}
          >
            <StepMeasurements
              mode={measureMode}
              width={width}
              height={height}
              onModeChange={setMeasureMode}
              onWidthChange={setWidth}
              onHeightChange={setHeight}
              onNext={() => setOpenIndex(3)}
            />
          </AccordionItem>
          <AccordionItem
            number={4}
            title="Lining"
            summary={summaries.lining}
            error={validationAttempted && !summaries.lining}
            open={openIndex === 3}
            onOpen={() => setOpenIndex(openIndex === 3 ? -1 : 3)}
          >
            <StepLining
              values={lining}
              onToggle={(opt, checked) =>
                setLining((prev) =>
                  checked ? [...prev, opt] : prev.filter((x) => x !== opt)
                )
              }
              onNext={() => setOpenIndex(4)}
            />
          </AccordionItem>
          <AccordionItem
            number={5}
            title="Panel Coverage"
            summary={summaries.panelCoverage}
            error={validationAttempted && !summaries.panelCoverage}
            open={openIndex === 4}
            onOpen={() => setOpenIndex(openIndex === 4 ? -1 : 4)}
          >
            <StepPanelCoverage
              value={panelCoverage}
              onChange={setPanelCoverage}
              onNext={() => setOpenIndex(5)}
            />
          </AccordionItem>
          <AccordionItem
            number={6}
            title="Panel Type"
            summary={summaries.panelType}
            error={validationAttempted && !summaries.panelType}
            open={openIndex === 5}
            onOpen={() => setOpenIndex(openIndex === 5 ? -1 : 5)}
          >
            <StepPanelType
              value={panelType}
              onChange={setPanelType}
              onNext={() => setOpenIndex(6)}
            />
          </AccordionItem>
          <AccordionItem
            number={7}
            title="Grommet Finish"
            summary={summaries.grommetFinish}
            error={validationAttempted && !summaries.grommetFinish}
            open={openIndex === 6}
            onOpen={() => setOpenIndex(openIndex === 6 ? -1 : 6)}
          >
            <StepGrommetFinish
              value={grommetFinish}
              onChange={setGrommetFinish}
              onNext={() => setOpenIndex(7)}
            />
          </AccordionItem>

          <AccordionItem
            number={8}
            title="Hardware"
            summary={summaries.hardware}
            error={validationAttempted && !summaries.hardware}
            open={openIndex === 7}
            onOpen={() => setOpenIndex(openIndex === 7 ? -1 : 7)}
          >
            <StepHardware
              value={hardware}
              onChange={setHardware}
              onNext={() => setOpenIndex(8)}
            />
          </AccordionItem>

          <AccordionItem
            number={9}
            title="Accessories (option)"
            summary={summaries.accessories}
            open={openIndex === 8}
            onOpen={() => setOpenIndex(openIndex === 8 ? -1 : 8)}
          >
            <StepAccessories
              values={accessories}
              onToggle={(opt, checked) =>
                setAccessories((prev) =>
                  checked ? [...prev, opt] : prev.filter((x) => x !== opt)
                )
              }
              onNext={() => setOpenIndex(9)}
            />
          </AccordionItem>
        </div>
        <div className="p-4 flex gap-4">
          <button
            className="flex-1 bg-[#49443e] text-white rounded py-2"
            onClick={() => {
              setValidationAttempted(true);
              const missing = getMissingSteps();
              if (missing.length) {
                setShowModal(true);
              } else {
                setShowReview(true);
              }
            }}
          >
            Add to Bag
          </button>
          <button
            className="flex-1 border border-gray-300 hover:bg-gray-50 rounded py-2"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>
      </div>
      {showModal ? (
        <IncompleteModal
          missingSteps={getMissingSteps()}
          onClose={() => setShowModal(false)}
        />
      ) : null}
      <ReviewDrawer
        open={showReview}
        onClose={() => setShowReview(false)}
        summary={{
          width,
          height,
          mount,
          fabric: selectedFabric,
          lining,
          panelCoverage,
          panelType,
          grommetFinish,
          hardware,
          accessories,
          onAgree: () => {
            const current = JSON.parse(localStorage.getItem("cart") || "[]");
            const newItem = {
              id: Date.now(),
              title,
              image: mainImage,
              width,
              height,
              mount,
              fabric: selectedFabric,
              lining,
              panelCoverage,
              panelType,
              grommetFinish,
              hardware,
              accessories,
              price: 2311320,
            };
            localStorage.setItem("cart", JSON.stringify([newItem, ...current]));
            setShowReview(false);
            window.location.href = "/cart";
          },
        }}
      />
    </div>
  );
}
