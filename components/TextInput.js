function TextInput({ onAnalyze }) {
    try {
        const [text, setText] = React.useState('');
        const [isLoading, setIsLoading] = React.useState(false);

        const handleSubmit = async (e) => {
            e.preventDefault();
            if (!text.trim()) return;

            setIsLoading(true);
            try {
                await onAnalyze(text);
            } catch (error) {
                console.error('Text analysis error:', error);
            } finally {
                setIsLoading(false);
            }
        };

        return (
            <div data-name="text-input-container" className="max-w-2xl mx-auto p-4">
                <form data-name="input-form" onSubmit={handleSubmit}>
                    <textarea
                        data-name="text-area"
                        className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 min-h-[200px] mb-4"
                        placeholder="أدخل النص هنا للتحقق..."
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <button
                        data-name="submit-button"
                        type="submit"
                        disabled={isLoading || !text.trim()}
                        className={`w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-medium
                            ${isLoading || !text.trim() ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-90'}`}
                    >
                        {isLoading ? (
                            <span data-name="loading-text">
                                <i className="fas fa-spinner fa-spin mr-2"></i>
                                جاري التحليل...
                            </span>
                        ) : (
                            'تحليل النص'
                        )}
                    </button>
                </form>
            </div>
        );
    } catch (error) {
        console.error('TextInput component error:', error);
        reportError(error);
        return null;
    }
}
