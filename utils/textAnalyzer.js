async function analyzeText(text) {
    const systemPrompt = `You are an AI text detector. Analyze the given text and determine the likelihood that it was written by AI. 
    Return a JSON object with:
    - score (0-1, where 1 means highly likely AI-generated)
    - details object containing:
        - vocabularyDiversity (string description)
        - sentenceComplexity (string description)
        - textPatterns (string description)
    
    Provide all descriptions in Arabic.`;

    try {
        const response = await invokeAIAgent(systemPrompt, text);
        return JSON.parse(response);
    } catch (error) {
        console.error('Text analysis error:', error);
        throw new Error('فشل في تحليل النص. يرجى المحاولة مرة أخرى.');
    }
}
