export function evaluateAnswer({
    answer,
    keywords,
}: {
    answer: string;

    keywords: string[];
}) {
    const normalizedAnswer =
        answer.toLowerCase();

    if (
        normalizedAnswer.trim()
            .length < 40
    ) {
        return {
            score: 1,

            feedback:
                "Answer is too short and lacks sufficient explanation.",

            improvedAnswer:
                "Try explaining the concept in more detail using technical terminology.",

            matchedKeywords: [],
        };
    }

    const matchedKeywords =
        keywords.filter((keyword) =>
            normalizedAnswer.includes(
                keyword.toLowerCase()
            )
        );

    const words =
        normalizedAnswer
            .split(/\s+/)
            .filter(Boolean);

    const uniqueWords = 
        new Set(words);

    const uniquenessRatio =
        uniqueWords.size /
        words.length;

    const keywordScore =
        matchedKeywords.length /
        keywords.length;

    let score = 0;

    if (keywordScore === 0) {
        score = 2;
    } else if (
        keywordScore <= 0.3
    ) {
        score = 4;
    } else if (
        keywordScore <= 0.6
    ) {
        score = 6;
    } else if (
        keywordScore <= 0.8
    ) {
        score = 8;
    } else {
        score = 10;
    }

    let feedback = "";

    if (score <= 3) {
        feedback =
            "Answer appears mostly unrelated or missing important concepts.";
    } else if (
        score <= 5
    ) {
        feedback =
            "Answer shows partial understanding but lacks depth.";
    } else if (
        score <= 7
    ) {
        feedback =
            "Good answer with decent understanding of the topic.";
    } else {
        feedback =
            "Strong answer demonstrating clear conceptual understanding.";
    }

    if (uniquenessRatio < 0.4) {
  score = Math.max(
    score - 3,
    1
  );

  feedback +=
    " Answer contains excessive repetition.";
}

    return {
        score,

        feedback,

        improvedAnswer:
            score >= 8
                ? "Strong answer overall."
                : "Include more technical concepts and clearer explanations.",

        matchedKeywords,
    };
}