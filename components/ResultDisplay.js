function ResultDisplay({ result }) {
    try {
        if (!result) return null;

        const getScoreColor = (score) => {
            if (score >= 0.7) return 'text-red-600';
            if (score >= 0.4) return 'text-yellow-600';
            return 'text-green-600';
        };

        const getScoreText = (score) => {
            if (score >= 0.7) return 'احتمال عالي للذكاء الاصطناعي';
            if (score >= 0.4) return 'احتمال متوسط للذكاء الاصطناعي';
            return 'من المحتمل أن يكون النص بشريًا';
        };

        return (
            <div data-name="result-container" className="max-w-2xl mx-auto p-4">
                <div data-name="result-card" className="result-card bg-white rounded-lg shadow-md p-6">
                    <h2 data-name="result-title" className="text-2xl font-semibold mb-4 text-gray-800">
                        نتيجة التحليل
                    </h2>
                    <div data-name="score-container" className="mb-6">
                        <div data-name="score-label" className="text-lg font-medium mb-2">
                            درجة احتمالية الذكاء الاصطناعي:
                        </div>
                        <div data-name="score-value" className={`text-3xl font-bold ${getScoreColor(result.score)}`}>
                            {Math.round(result.score * 100)}%
                        </div>
                        <p data-name="score-text" className={`mt-2 ${getScoreColor(result.score)}`}>
                            {getScoreText(result.score)}
                        </p>
                    </div>
                    <div data-name="details-container" className="text-gray-600">
                        <p data-name="details-text" className="mb-2">
                            تفاصيل إضافية:
                        </p>
                        <ul data-name="details-list" className="list-disc list-inside space-y-2">
                            <li>تنوع المفردات: {result.details.vocabularyDiversity}</li>
                            <li>تعقيد الجمل: {result.details.sentenceComplexity}</li>
                            <li>نمطية النص: {result.details.textPatterns}</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('ResultDisplay component error:', error);
        reportError(error);
        return null;
    }
}
