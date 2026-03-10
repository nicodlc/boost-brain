# BoostBrain 🏎️⚽️

> Stop guessing what you should be doing, let BoostBrain tell you!

**So, what is it?**

> _BoostBrain_ is an AI-powered (not really, but somewhat!) Rocket League match
> analyis dashboard that turns your last ranked games data into actionable
> coaching insights. By combining data from
> [ballchasing.com](https://www.ballchasing.com) with statistical analysis and
> LLM reasoning, it is a project designed to help players understand patterns in
> their gameplay across recent matches.

**Why did I make it?**

> I have played RL since 2019, and spent a whole lot of time analyzing my
> replays. Going over it visually is always the best way to understand and
> improve your gameplay.

> But what about the numbers? What about the patterns from metrics you might not
> be fully aware off? That's where my mind was at, and I decided to build this
> to help myself and other players to look past the gameplay alone and
> understand the patterns in their matches.

**The result?**

> A lightweight analytics dashboard that explains _how you play_, and of course,
> what you can improve upon! Numbers never lie. So what better way to represent
> your data than with visuals?

## Features 🚀

1. Recent Match Analytics
   - Aggregates data and analyzes it over your last 5 to 15 ranked matches in
     any mode! Current supported playlist include:
     - 1v1 (a.k.a. `ranked-solo-standard`)
     - 2v2 (a.k.a. `ranked-doubles`)
     - 3v3 (a.k.a. `ranked-standard`)

2. AI coaching insights!
   - The project uses an open-source LLM inference provider,
     [Groq](https://groq.com/), to generate the insights with the help of
     [Kimi2.5](https://huggingface.co/moonshotai/Kimi-K2.5) as the base model!

3. Traditional Data Analytics
   - All charts and graphs are generated after parsing + cleansing the raw data
     from your `Ballchasing` replays. Don't worry, we don't save any
     information!
   - This is done by a human (specifically [me](https://github.com/nicodlcv),
     your fellow RL player, who just so happens to be a developer that loves
     data)

## Architecture 🛠️

This whole project is designed as a lightweight, full-stack Typescript
application!

> Still a work in progress though, I'll be modifying the README as I go!

### Frontend

- Vue 3 + Vite
- TUI-inspired dashboard

### Backend

- Deno
- Oak for middlewware

### AI Layer

- Groq for LLM inference
- [LangChain](https://www.langchain.com/) (or possibly LangGraph) for LLM
  orchestration.
