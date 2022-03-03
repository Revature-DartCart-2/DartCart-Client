import { createEntityAdapter, createSlice, createSelector, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
import { Invoice, RootState } from "./types";

// JSON server URL. Change to backend URL for testing/in production
const API_URL = process.env.REACT_APP_API_URL;

// createEntityAdapter gives us several premade reducer functions
// for manipulating state. It gives us:
// addOne / addMany: add new items to the state
// upsertOne / upsertMany: add new items or update existing ones
// updateOne / updateMany: update existing items by supplying partial values
// removeOne / removeMany: remove items based on IDs
// setAll: replace all existing items
//
// We also get:
// getInitialState: returns an object that looks like { ids: [], entities: {} },
// for storing a normalized state of items along with an array of all item IDs
// getSelectors: generates a standard set of selector functions
const invoiceAdapter = createEntityAdapter<Invoice>()

// Create slice that will manage the state of some type of object
const invoiceSlice = createSlice({
    name: "invoices",
    initialState: invoiceAdapter.getInitialState({
        status: "idle",
    }),
    reducers: {
        addInvoice: invoiceAdapter.addOne,
    },
    // Extra reducers to handle the promise produced by createAsyncThunk
    extraReducers: (builder) => {
        builder
            .addCase(saveInvoice.pending, (invoiceSliceState, action) => {
                invoiceSliceState.status = "loading"
            })
            .addCase(saveInvoice.fulfilled, (invoiceSliceState, action) => {
                invoiceSliceState.status = "finished"
            })
            .addCase(saveInvoice.rejected, (invoiceSliceState, action) => {
                invoiceSliceState.status = "rejected"
            })
    }
})

// With Redux Toolkit we get our reducers wrapped in actions, which simplifies the logic
// a lot. Our React components will use dispatch on these actions to actually perform
// state management
export const { addInvoice } = invoiceSlice.actions
export default invoiceSlice.reducer;

// In this next section is where we define our selectors, ie how our react components get/derive
// the state they need from Redux. The base method is useSelector, but it has some optimizations
// built on it via Redux Toolkit that we can get from the adapter we declared earlier

// What we've done here is override the built in selectors given by the adapater object
// we can also create custom selectors with createSelector
export const { selectAll: selectInvoices, selectById: selectInvoiceByID } =
    invoiceAdapter.getSelectors((state: RootState) => state.invoices)

export const selectStatus = createSelector(
    (state: RootState) => state.invoices,
    (invoices) => invoices.status
)

// Async functionality
export const saveInvoice = createAsyncThunk(
    "invoices/saveInvoice",
    async (invoice: Invoice) => {
        return axios.post(API_URL + "register", {
            id: invoice.id,
            orderPlaced: invoice.orderPlaced,
            shippedFrom: invoice.shippedFrom,
            shippedTo: invoice.shippedTo,
            customer: invoice.customer.id,
            shop: invoice.shop.id
        })
    }
)