import React from "react";
import Activity from "../Activity/Activity";
import Objectives from "../Objectives/Objectives";
import Radar from "../Radar/Radar";
import Kpi from "../Kpi/Kpi";
import KeyFigures from "../KeyFigures/KeyFigures";

function SectionMain() {
	return (
		<section>
			<div className="activityContainer">
				<Activity />
				<Objectives />
				<Radar />
				<Kpi />
			</div>
			<div className="keyFiguresContainer">
				<KeyFigures />
				<KeyFigures />
				<KeyFigures />
				<KeyFigures />
			</div>
		</section>
	);
}

export default SectionMain;
