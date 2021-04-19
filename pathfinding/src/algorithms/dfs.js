export function dfs(grid, startNode, finishNode){
    const visitedNodes = [];
    const unvisiteNodes = getAllNodes(grid);
    while(!!unvisiteNodes.length){
        const nextNode = startNode
        nextNode.isVisited = trud;
        visitedNodes.push(nextNode);
        if (nextNode === finishNode) return visitedNodes;
        startNode = getNextNode();
        unvisiteNodes.shift();
    }    
} 

function getNextNode(node, grid) {
    const nextNode = [];
    const {row, col} = node;
    if (row > 0) neighbors.push(grid[row - 1][col]);
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
    if (col > 0) neighbors.push(grid[row][col - 1]);
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);

    if (!grid[row - 1][col].isVisited && row > 0) nextNode.push(grid[row - 1][col]);
    else if (!grid[row][col + 1].isVisited && col < grid[0].length - 1) nextNode.push(grid[row][col + 1]);
    else if (!grid[row + 1][col].isVisited && row < grid.length - 1) nextNode.push(grid[row + 1][col]);
    else if (!grid[row][col - 1].isVisited && col > 0) nextNode.push(grid[row][col - 1]);
    return nextNode;
}

function getAllNodes(grid){
    const nodes = [];
    for (const row of grid) {
        for(const node of row){
            nodes.push(node);
        }
    }
    return nodes;
}