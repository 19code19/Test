var lstClientsId = clientsIds
    .Distinct()
    .Where(x => !string.IsNullOrWhiteSpace(x))
    .Select(x => Regex.Replace(x, @"[^a-zA-Z0-9\s]", string.Empty))
    .Chunk(batchSize);
