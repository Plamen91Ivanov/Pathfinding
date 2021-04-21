export function AStar(grid, startNode, finishNode){
    const n = grid.length;
    const m = grid[0].length;

    const endRow = finishNode.row;
    const endCol = finishNode.col;

    const visitedNodesInOrder = [];

    const pq = new PriorityQueue((a, b) => a.distance < b.distance);

    startNode.parent = null;

    //Store in an object {node: {row, col, parent}, distance: x}
    //Distance refers to distance to FinishNode

    pq.push({node: startNode, distance: Math.abs(endRow - startNode.row) + Math.abs(endCol - startNode.col)});

    while(!pq.isEmpty()){
        const {node} = pq.pop();

        const row = node.row;
        const col = node.col;
        const parent = node.parent;

        if(grid[row][col].nodeType == NodeType.VISITED_NODE){
            continue;
        }

        if (grid[row][col].nodeType === NodeType.FINISH_NODE) {
            visitedNodesInOrder.push({row, col, parent});
            break;
        }

        if (grid[row][col].nodeType === NodeType.WALL_NODE) {
            continue;
        }

        if (row < n - 1) {
            pq.push({node: {row: row + 1, col, parent: {row, col}}, distance: Math.abs(endRow - row + 1) + Math.abs(endCol - col)});
        }

        if (row > 0) {
            pq.push({node: {row: row - 1, col, parent: {row, col}}, distance: Math.abs(endRow - row - 1) + Math.abs(endCol - col)});
        }

        if (col < m - 1) {
            pq.push({node: {row: row, col: col + 1, parent: {row, col}}, distance: Math.abs(endRow - row) + Math.abs(endCol - col + 1)});
        }

        if (col > 0) {
            pq.push({node: {row: row, col: col - 1, parent: {row, col}}, distance: Math.abs(endRow - row) + Math.abs(endCol - col - 1)});
        }

        if (grid[row][col].nodeType === NodeType.EMPTY_NODE) {
            visitedNodesInOrder.push({row, col, parent: parent});
            grid[row][col].nodeType = NodeType.VISITED_NODE;
        }

    }
    return visitedNodesInOrder
}
