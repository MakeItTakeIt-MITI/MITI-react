import { inquiriesListHandler } from '../features/inquiries/mock/inquiriesListHandler'
import { common } from './common';


const handlers = [
    ...inquiriesListHandler
    , ...common
]

export default handlers;
