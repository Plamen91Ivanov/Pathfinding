export function dfs(grid, startNode, finishNode){
    const visitedNodes = [];
    const unvisiteNodes = getAllNodes(grid);
    while(!!unvisiteNodes.length){
        console.log('count');
        const nextNode = startNode
        nextNode.isVisited = true;
        visitedNodes.push(nextNode);
        if (nextNode === finishNode) return visitedNodes;
        console.log('finish node ', finishNode);
        console.log('next node ', nextNode);
        startNode = getNextNode(nextNode, grid);
        console.log(startNode);
        unvisiteNodes.shift();
    }    
}

function getNextNode(node, grid) {
    let nextNode = {};
    const {col, row} = node;
    console.log(node);
    const test = grid[row][col];
    console.log(test);

    if(row > 0) {
        if (!grid[row - 1][col].isVisited && row > 0){
            nextNode = grid[row - 1][col];
        } 
        else if (!grid[row][col + 1].isVisited && col < grid[0].length - 1){
            nextNode = grid[row][col + 1];
        } 
        else if (!grid[row + 1][col].isVisited && row < grid.length - 1){
            nextNode = grid[row + 1][col];
        } 
        else if (!grid[row][col - 1].isVisited && col > 0){
            nextNode = grid[row][col - 1];
        } 
    }
    else {
        
    }
    
    console.log('next ', nextNode);
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