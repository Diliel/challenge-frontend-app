import mock from './mock'

/* eslint-enable import/extensions */

import './data'

mock.onAny().passThrough() // forwards the matched request over network
