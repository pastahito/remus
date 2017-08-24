/****************
** UI State **
****************/
export const SET_TREE_VIEW_TAB = 'SET_TREE_VIEW_TAB'
export function setTreeViewTab(index) {
    return { type: SET_TREE_VIEW_TAB, index }
}

export const SET_DOC_VIEW_TAB = 'SET_DOC_VIEW_TAB'
export function setDocViewTab(index) {
    return { type: SET_DOC_VIEW_TAB, index }
}

export const TOGGLE_LEFT_PANEL = 'TOGGLE_LEFT_PANEL'
export function toggleLeftPanel() {
    return { type: TOGGLE_LEFT_PANEL }
}

export const SLIDE_NODE_PROPERTIES = 'SLIDE_NODE_PROPERTIES'
export function openNodeProperties() {
    return { type: SLIDE_NODE_PROPERTIES, payload: true }
}
export function closeNodeProperties() {
    return { type: SLIDE_NODE_PROPERTIES, payload: false }
}
export const SET_DETAILS_NODE_ID = 'SET_DETAILS_NODE_ID'
export function setDetailedNodeID(id) {
    return { type: SET_DETAILS_NODE_ID, id }
}

/***************************
** TreeView Drag and Drop **
***************************/
export const MERGE_NODES = 'MERGE_NODES'
export function mergeNodes(nodes) {
    return { type: MERGE_NODES, nodes}
}

export const TOGGLE_NODE = 'TOGGLE_NODE'
export function toggleNode(nodeID) {
    return { type: TOGGLE_NODE, nodeID}
}

export const MOVE_NODE = 'MOVE_NODE'
export function moveNode(direction, sourceNodeID, sourceParentID, targetNodeID, targetParentID) {
    return { type: MOVE_NODE, direction, sourceNodeID, sourceParentID, targetNodeID, targetParentID }
}

export const CREATE_NODE = 'CREATE_NODE'
export function createNode(nodeType, direction, nodeID, parentID) {
    return { type: CREATE_NODE, nodeType, direction, nodeID, parentID }
}

export const DELETE_NODE = 'DELETE_NODE'
export function deleteNode(nodeID, parentID) {
    return { type: DELETE_NODE, nodeID, parentID }
}

export const CREATE_DOCUMENT = 'CREATE_DOCUMENT'
export function createDocument(docID) {
    return { type: CREATE_DOCUMENT, docID }
}


/***********************
** Project Management **
***********************/
export const LOAD_PROJECT = 'LOAD_PROJECT'
export function loadProject(payload) {
    return { type: LOAD_PROJECT, payload }
}

export const SET_PROJECT_PATH = 'SET_PROJECT_PATH'
export function setProjectPath(payload) {
    return { type: SET_PROJECT_PATH, payload }
}

export const SET_PROJECT_INFO = 'SET_PROJECT_INFO'
export function setProjectInfo(payload) {
    return { type: SET_PROJECT_INFO, payload }
}

export const DELETE_DOCUMENT = 'DELETE_DOCUMENT'
export function deleteDocument(docIndex) {
    return { type: DELETE_DOCUMENT, docIndex }
}


export const INSERT_DOCIDS = 'INSERT_DOCIDS'
export function insertDocIDs(docIDs) {
    return { type: INSERT_DOCIDS, docIDs}
}
export function insertDocument(docID) {
    return { type: INSERT_DOCIDS, docIDs: [docID] }
}

/************************
** Notification System **
************************/
export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION'
export function showNotification(payload) {
    return { type: SHOW_NOTIFICATION, payload }
}

/************************
** Application's State **
************************/
export const APP_STATE = 'APP_STATE'
export function setAppStateTo(payload) {
    return { type: APP_STATE, payload }
}

/****************
** Open modals **
****************/
export const OPEN_MODAL = 'OPEN_MODAL'
export function openModal(modalName) {
    return { type: OPEN_MODAL, modalName }
}

/********************
** Editable Fields **
********************/
export const UPDATE_EDITABLE_FIELD = 'UPDATE_EDITABLE_FIELD'
export function updateEditableField(nodeID, fieldPath, newValue) {
    return { type: UPDATE_EDITABLE_FIELD, nodeID, fieldPath, newValue }
}
export const INCLUDE_FIELD = 'INCLUDE_FIELD'
export function includeField(nodeID, section, property, include) {
    return { type: INCLUDE_FIELD, nodeID, section, property, include}
}


/*********
** i18n **
*********/
export const SET_LOCALE = 'SET_LOCALE'
export function setLocale(payload) {
    return { type: SET_LOCALE, payload }
}
