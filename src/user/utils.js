import {Promise} from 'tvdml';

import * as user from '../user';
import {getFamilyAccounts} from '../request/soap';

export function processFamilyAccount(login) {
	return Promise
		.resolve(login)
		.then(prepareFamilyData)
		.then(user.set);
}

function prepareFamilyData(login) {
	const familyAccount = [{name: login, fid: 0}];

	if (!user.isAuthorized()) {
		return {family: null, selected: null};
	}

	if (!user.isExtended()) {
		return {family: familyAccount, selected: null};
	}

	return getFamilyAccounts().then(({family, selected}) => {
		const fixedFamily = family.length ? family : familyAccount;
		return {family: fixedFamily, selected};
	});
}