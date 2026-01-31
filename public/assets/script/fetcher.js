

async function api(path, options = {}){
    const res = await fetch(path, {
        headers: {"Content-Type": "application/json"},
        ...options
    });

    // Try to parse JSON either way
    const data = await res.json().catch(() => null);

    if(!res.ok){
        const msg = data?.error || `Request failed(${res.status})`;
        throw new Error(msg);
    }
    return data;
}

export{api}