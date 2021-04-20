export function dfs(grid, startNode, finishNode){
    const visitedNodes = [];
    const unvisiteNodes = getAllNodes(grid);
    while(!!unvisiteNodes.length){
        const nextNode = startNode
        visitedNodes.push(nextNode);
        if (nextNode === finishNode) return visitedNodes;
        const adjNodes = getNextNode(nextNode, grid);
        startNode.isVisited = true;
        startNode = adjNodes.pop();
        unvisiteNodes.shift();
    }    
}

function getNextNode(node, grid) {
    let nextNodes = [];
    const {col, row} = node;

    if (col > 0) nextNodes.push(grid[row][col - 1]);
    if (row < grid.length - 1) nextNodes.push(grid[row + 1][col]);
    if (col < grid[0].length - 1) nextNodes.push(grid[row][col + 1]);
    if (row > 0) nextNodes.push(grid[row - 1][col]);

    // if(row > 0) {
    //     if (!grid[row - 1][col].isVisited && row > 0){
    //         nextNode = grid[row - 1][col];
    //     } 
    //     else if (!grid[row][col + 1].isVisited && col < grid[0].length - 1){
    //         nextNode = grid[row][col + 1];
    //     } 
    //     else if (!grid[row + 1][col].isVisited && row < grid.length - 1){
    //         nextNode = grid[row + 1][col];
    //     } 
    //     else if (!grid[row][col - 1].isVisited && col > 0){
    //         nextNode = grid[row][col - 1];
    //     } 
    // }
    
    return nextNodes.filter(nextNode => !nextNode.isVisited);
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