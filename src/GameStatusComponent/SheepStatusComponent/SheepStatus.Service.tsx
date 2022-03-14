export function getHitsArr(data: any) {
    const { size, activeHits } = data;
    // debugger;
    const remaining = size - activeHits;
    const hits = [];
    for (let i = 0; i < activeHits; i++) {
      hits.push(true)
    }
    if (remaining) {
      for (let j = 0; j < remaining; j++) {
        hits.push(false)
      }
    }
    return hits;
  }