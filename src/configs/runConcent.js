import { run } from "concent";
import I18n from "../i18n/index";
const runStore = () => {
	return run(
		{ I18n },
		{
			middlewares: [],
			plugins: [],
			isHot: true,
			isStrict: false,
			log: false,
			alwaysRenderCaller: true,

			computedCompare: true,
			watchCompare: true,
			watchImmediate: true,
			reComputed: true,
			objectValueCompare: true,
			nonObjectValueCompare: true,
			localStorage: true
		}
	);
};
export default runStore;
