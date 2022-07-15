const COMPOUND_LIST = 'https://raw.githubusercontent.com/autofarmnetwork/frontend-config/master/tokenlists/cronos/crodex.json';

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [COMPOUND_LIST];

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = [
    COMPOUND_LIST,
    'https://raw.githubusercontent.com/autofarmnetwork/frontend-config/master/tokenlists/cronos/crona.json', 
    'https://raw.githubusercontent.com/autofarmnetwork/frontend-config/master/tokenlists/cronos/custom.json',
    'https://raw.githubusercontent.com/autofarmnetwork/frontend-config/master/tokenlists/cronos/photon.json',
    'https://raw.githubusercontent.com/autofarmnetwork/frontend-config/master/tokenlists/cronos/smolswap.json'
];
