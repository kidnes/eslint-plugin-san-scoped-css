import type { Rule } from "../types"

const baseRules = [
    {
        rule: require("../rules/no-deprecated-deep-combinator"),
        ruleName: "no-deprecated-deep-combinator",
        ruleId: "san-scoped-css/no-deprecated-deep-combinator",
    },
    {
        rule: require("../rules/no-parent-of-v-global"),
        ruleName: "no-parent-of-v-global",
        ruleId: "san-scoped-css/no-parent-of-v-global",
    },
    {
        rule: require("../rules/no-parsing-error"),
        ruleName: "no-parsing-error",
        ruleId: "san-scoped-css/no-parsing-error",
    },
    {
        rule: require("../rules/no-unused-keyframes"),
        ruleName: "no-unused-keyframes",
        ruleId: "san-scoped-css/no-unused-keyframes",
    },
    {
        rule: require("../rules/no-unused-selector"),
        ruleName: "no-unused-selector",
        ruleId: "san-scoped-css/no-unused-selector",
    },
    {
        rule: require("../rules/require-scoped"),
        ruleName: "require-scoped",
        ruleId: "san-scoped-css/require-scoped",
    },
    {
        rule: require("../rules/require-selector-used-inside"),
        ruleName: "require-selector-used-inside",
        ruleId: "san-scoped-css/require-selector-used-inside",
    },
    {
        rule: require("../rules/require-v-deep-argument"),
        ruleName: "require-v-deep-argument",
        ruleId: "san-scoped-css/require-v-deep-argument",
    },
    {
        rule: require("../rules/require-v-global-argument"),
        ruleName: "require-v-global-argument",
        ruleId: "san-scoped-css/require-v-global-argument",
    },
    {
        rule: require("../rules/require-v-slotted-argument"),
        ruleName: "require-v-slotted-argument",
        ruleId: "san-scoped-css/require-v-slotted-argument",
    },
]

export const rules = baseRules.map((obj) => {
    const rule = obj.rule
    rule.meta.docs.ruleName = obj.ruleName
    rule.meta.docs.ruleId = obj.ruleId
    return rule as Rule
})

/**
 * Collect the rules
 * @param {string} category category
 * @returns {Array} rules
 */
export function collectRules(
    category?: "recommended",
): { [key: string]: string } {
    return rules.reduce((obj, rule) => {
        if (
            (!category || rule.meta.docs.categories.includes(category)) &&
            !rule.meta.deprecated
        ) {
            obj[rule.meta.docs.ruleId || ""] = rule.meta.docs.default || "error"
        }
        return obj
    }, {} as { [key: string]: string })
}
