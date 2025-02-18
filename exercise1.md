# Exercise 1

Let's consider an application written in Python, by a team of ~6 people.

## Linting, testing, building

In the Python ecosystem, there are several popular tools for handling linting, testing, and building as part of a CI (Continuous Integration) setup.

For linting recommended tools are **flake** and **black** which combines style checking and automatic formatting.

For testing, the most popular testing framework for Python is **pytest**. It’s flexible, easy to use, and supports plugins. Optionaly, we use **unitest** a Python's built-in testing framework, inspired by Java's JUnit. It’s more verbose than pytest but doesn’t require additional dependencies. For measuring code coverage during testing we can use **coverage.py**. It’s often used alongside pytest or unittest.

To build your project into packages in distributable formats we recommend using the **build** tool, which is a modern, PEP 517-compliant tool for building packages.

## Alternatives to CI besides Jenkins and GitHub Actions

For alternatives to Jenkins and GitHub Actions for setting up CI (Continuous Integration), there are several excellent options available. Each tool has its strengths, and the best choice depends on your specific needs, such as ease of use, integration with your existing tools, scalability, and cost. Some of the most popular are:

- GitLab CI/CD: GitLab's built-in CI/CD tool, fully integrated with GitLab repositories. Best for Teams already using GitLab for version control.

- CircleCI: A cloud-based CI/CD platform with strong support for Python and other languages. Best for Teams looking for a flexible and scalable CI/CD solution.

- Travis CI: A cloud-based CI/CD tool known for its simplicity and ease of use. Best for Open-source projects and small teams.

## Self-hosting vs cloud-based

It depends on your specific needs. A **self-hosted** environment is ideal if you require full control over infrastructure, have strict security or compliance requirements, or want to avoid recurring cloud costs. However, it demands significant upfront investment and ongoing maintenance. On the other hand, a **cloud-based** solution is better for teams prioritizing ease of use, scalability, and flexibility, as it eliminates the need for hardware management and offers pay-as-you-go pricing. To decide, consider factors like team size, budget, security needs, technical expertise, and scalability requirements. If you need tight integration with cloud tools or lack resources for self-hosting, a cloud-based setup is likely the better choice.
