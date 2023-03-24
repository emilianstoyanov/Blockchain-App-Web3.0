import React, {useEffext, useStyle} from "react";
import { ethers } from 'ethers';

import { contractABI, contractAddress } from '../utils/contracts';

export const TransactionContext = React.createContext();

const { ethereum } = window;