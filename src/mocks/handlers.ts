import { inquiriesListHandler } from '../features/inquiries/mock/inquiriesListHandler'
import { delay, http } from 'msw'
import { common } from './common';


const handlers = [
    ...inquiriesListHandler
    , ...common
]

export default handlers;
